/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Card, List } from "antd";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useGetMyPendingBookingsQuery } from "../../../redux/features/admin/Bookings";

dayjs.extend(duration);

// Define the type for booking data
type Booking = {
  key: string;
  serviceName: string;
  date: string;
  startTime: string;
  endTime: string;
  price: string;
};

const calculateTimeRemaining = (date: string, time: string): string => {
  const now = dayjs();
  const targetTime = dayjs(`${date} ${time}`);
  const diff = targetTime.diff(now);

  if (diff <= 0) {
    return "Time's up";
  }

  const durationObj = dayjs.duration(diff);
  return `${durationObj.days()}d ${durationObj.hours()}h ${durationObj.minutes()}m ${durationObj.seconds()}s`;
};

const SlotCountdown = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<Record<string, string>>({});
  const [nextBooking, setNextBooking] = useState<Booking | null>(null);
  const [navbarCountdown, setNavbarCountdown] = useState<string>("");

  const { data, isLoading , refetch} = useGetMyPendingBookingsQuery(undefined);

  useEffect(() => {
    if (data && data?.data) {
      const transformedData = data?.data?.map((booking: any) => ({
        key: booking?._id,
        serviceName: booking?.service?.name || "No Service",
        date: booking?.slot?.date,
        startTime: booking?.slot?.startTime,
        endTime: booking?.slot?.endTime,
        price: `$${booking?.service?.price}`,
      }));

      setBookings(transformedData);

      // Find the next booking
      let nearestBooking: Booking | null = null;
      transformedData.forEach((booking) => {
        if (
          (!nearestBooking ||
            dayjs(`${booking.date} ${booking.startTime}`).isBefore(
              dayjs(`${nearestBooking.date} ${nearestBooking.startTime}`)
            )) &&
          dayjs(`${booking.date} ${booking.startTime}`).isAfter(dayjs())
        ) {
          nearestBooking = booking;
        }
      });

      setNextBooking(nearestBooking);

      // Initialize time remaining calculation for each booking
      const updatedTimes: Record<string, string> = {};
      transformedData.forEach((booking) => {
        updatedTimes[booking.key] = calculateTimeRemaining(
          booking.date,
          booking.startTime
        );
      });

      setTimeRemaining(updatedTimes);
    }
  }, [data]);
  
  useEffect(() => {
   
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(intervalId); 
  }, [refetch]);

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTimes: Record<string, string> = {};

      bookings.forEach((booking) => {
        updatedTimes[booking.key] = calculateTimeRemaining(
          booking.date,
          booking.startTime
        );
      });

      setTimeRemaining(updatedTimes);

      if (nextBooking) {
        const timeRemaining = calculateTimeRemaining(
          nextBooking.date,
          nextBooking.startTime
        );
        setNavbarCountdown(timeRemaining);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, [bookings, nextBooking]);

  return (
    <div className="p-4">
      {/* Navbar Countdown */}
      <div className="navbar-countdown" style={{ marginBottom: "16px" }}>
        {nextBooking && (
          <div>
            <strong>Next Booking:</strong> {nextBooking.serviceName} |{" "}
            <strong>Countdown:</strong> {navbarCountdown}
          </div>
        )}
      </div>

      <h1 className="text-2xl font-bold mb-4">Upcoming Bookings</h1>

      {nextBooking && (
        <div className="mb-6 p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold mb-2">
            Next Booking: {nextBooking.serviceName}
          </h2>
          <p className="text-gray-600">
            {nextBooking.date} | {nextBooking.startTime} - {nextBooking.endTime}
          </p>
          <p className="text-red-500 font-semibold">
            Countdown: {timeRemaining[nextBooking.key] || "Time's up"}
          </p>
        </div>
      )}

      <List
        grid={{ gutter: 16, column: 2 }}
        dataSource={bookings}
        loading={isLoading}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.serviceName} className="rounded-lg shadow-md">
              <p>
                <strong>Date:</strong> {item.date}
              </p>
              <p>
                <strong>Time:</strong> {item.startTime} - {item.endTime}
              </p>
              <p>
                <strong>Price:</strong> {item.price}
              </p>
              <p>
                <strong>Time Remaining:</strong>{" "}
                {timeRemaining[item.key] || "Time's up"}
              </p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default SlotCountdown;

