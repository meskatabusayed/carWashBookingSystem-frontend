/* eslint-disable @typescript-eslint/no-explicit-any */
import { Key, ReactNode } from "react";

export type TSlot  = {
    id: Key | null | undefined;
    serviceName: ReactNode;
    _id: string;
    service: any;
    date: string;
    startTime: string;
    endTime: string;
    isBooked: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
  };
  