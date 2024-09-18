
import { useGetSlotAvailabilityQuery } from "../../../redux/features/admin/SlotApi";



const ShowAllBookings = () => {
    
    const { data, isLoading } = useGetSlotAvailabilityQuery("");
    
  return (
    <>
    <h2 className="text-xl font-bold mb-4">All Upcoming Bookings</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data?.data.map((booking) => (
        <div key={booking?.id} className="p-4 border rounded shadow-md">
          <h3 className="text-lg font-semibold">{booking?.serviceName}</h3>
          <p className="text-gray-600">
            {booking?.date} | {booking?.startTime} - {booking?.endTime}
          </p>
          <p className="text-red-500 font-semibold">
            Countdown: {countdowns[booking?.id]?.days}d {countdowns[booking?.id]?.hours}h{" "}
            {countdowns[booking?.id]?.minutes}m {countdowns[booking?.id]?.seconds}s
          </p>
        </div>
      ))}
    </div>
    </>
    

  )
}

export default ShowAllBookings
