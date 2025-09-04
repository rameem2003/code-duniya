"use client";
import { userPurchaseRequest } from "@/lib/purchaseApi";
import { CourseContextType, purchaseType } from "@/types/type";
import { createContext, useContext, useEffect, useState } from "react";

const CourseContext = createContext<CourseContextType | null>(null);

export const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [courseList, setCourseList] = useState<purchaseType[]>([]);
  const fetchUserCourseList = async () => {
    try {
      let res = await userPurchaseRequest();
      setCourseList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserCourseList();
  }, []);

  return (
    <CourseContext.Provider value={{ courseList, fetchUserCourseList }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourse = () => useContext(CourseContext)!;
