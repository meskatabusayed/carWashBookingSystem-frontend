/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  DatePicker,
  TimePicker,
  Popconfirm,
  Typography,
  Select,
  message,
} from "antd";
import {
  useAddSlotMutation,
  useGetSlotsQuery,
  useUpdateSlotMutation,
} from "../../../redux/features/admin/SlotApi";
import {
  useGetServicesQuery,
} from "../../../redux/features/admin/AdminApi";
import { TService } from "../../../types/Service";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

interface Slot {
  key: string;
  _id: string;
  service: string;
  serviceName: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string; 
}

const SlotManagement = () => {
  const { data: slotsData, refetch } = useGetSlotsQuery(undefined);
  const { data: servicesData } = useGetServicesQuery(undefined);
  const [addSlot] = useAddSlotMutation();
  const [updateSlotStatus] = useUpdateSlotMutation();
  const [slots, setSlots] = useState<Slot[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [form] = Form.useForm();

  const serviceList: TService[] = servicesData?.data ?? [];

  useEffect(() => {
    if (slotsData && slotsData?.data && serviceList?.length > 0) {
      const fetchedSlots = slotsData.data.map((slot: any, index: number) => ({
        key: index.toString(),
        _id: slot?._id,
        service: slot?.service ? slot?.service?._id : "",
        serviceName: slot?.service ? slot?.service?.name : "No Service",
        date: slot?.date,
        startTime: slot?.startTime,
        endTime: slot?.endTime,
        isBooked: slot?.isBooked, // Will be either "booked", "available", or "canceled"
      }));
      setSlots(fetchedSlots);
    }
  }, [slotsData, serviceList]);

  const showModal = () => {
    form.resetFields();
    setIsModalVisible(true);
  };

  const ServiceOptions = serviceList.map((item: any) => ({
    value: item?._id,
    label: `${item?.name}`,
  }));

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      const selectedService = serviceList.find(
        (service: any) => service?._id === values.service
      );
      if (selectedService) {
        const newSlotData = {
          service: selectedService._id,
          date: values?.date.format("YYYY-MM-DD"),
          startTime: values?.startTime.format("HH:mm"),
          endTime: values?.endTime.format("HH:mm"),
        };
        await addSlot(newSlotData).unwrap();
        message.success("Slot added successfully!");
        refetch();
        setIsModalVisible(false);
      }
    } catch (error) {
      message.error("Failed to add the slot. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Function to toggle the slot status between "available" and "canceled"
  const toggleStatus = async (key: string) => {
    const slotToUpdate = slots.find((slot) => slot?.key === key);
    
    if (!slotToUpdate) return;

    // Logic to determine the next status
    let newStatus = "";
    if (slotToUpdate.isBooked === "booked") {
      // If the slot is "booked", it can only be changed to "canceled"
      newStatus = "canceled";
    } else {
      // If the slot is "available" or "canceled", toggle between these two
      newStatus = slotToUpdate.isBooked === "available" ? "canceled" : "available";
    }

    try {
      const updateData = {
        id: slotToUpdate._id,
        isBooked: newStatus, // Update the slot with the new status
      };

      await updateSlotStatus(updateData).unwrap();
      message.success(`Slot status updated to ${newStatus}!`);

      // Update local state for immediate feedback, or refetch data
      const updatedSlots = slots.map((slot) =>
        slot.key === key ? { ...slot, isBooked: newStatus } : slot
      );
      setSlots(updatedSlots);
      
    } catch (error) {
      message.error("Failed to update the slot status. Please try again.");
    }
  };

  // Columns for the table
  const columns = [
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime",
    },
    {
      title: "End Time",
      dataIndex: "endTime",
      key: "endTime",
    },
    {
      title: "Status",
      dataIndex: "isBooked",
      key: "isBooked",
      render: (isBooked: string, record: Slot) => (
        <Select
          value={isBooked} 
          onChange={() => toggleStatus(record.key)} 
          style={{ width: 120 }}
          disabled={isBooked === "booked"} 
        >
          <Option value="available">AVAILABLE</Option>
          <Option value="booked" disabled>BOOKED</Option> 
          <Option value="canceled">CANCELED</Option>
        </Select>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: Slot) => (
        <Popconfirm
          title="Are you sure to change the status of this slot?"
          onConfirm={() => toggleStatus(record.key)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" disabled={record.isBooked === "booked"}>
            Toggle Status
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: "#fff", minHeight: "100vh" }}>
      <Title level={2}>Slot Management</Title>
      <Button type="primary" icon={<PlusOutlined />} onClick={showModal} style={{ marginBottom: 16 }}>
        Add Slot
      </Button>
      <Table dataSource={slots} columns={columns} rowKey="_id" />

      <Modal
        title="Add Slot"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="service"
            label="Service"
            rules={[{ required: true, message: "Please select a service!" }]}
          >
            <Select placeholder="Select a Service" options={ServiceOptions} />
          </Form.Item>
          <Form.Item
            name="date"
            label="Date"
            rules={[{ required: true, message: "Please select the date!" }]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="startTime"
            label="Start Time"
            rules={[
              { required: true, message: "Please select the start time!" },
            ]}
          >
            <TimePicker format="HH:mm" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            name="endTime"
            label="End Time"
            rules={[{ required: true, message: "Please select the end time!" }]}
          >
            <TimePicker format="HH:mm" style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default SlotManagement;
