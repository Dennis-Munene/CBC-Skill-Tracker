import React from "react";
import MainLayout from "../components/layout/MainLayout";

export default function AdminDashboard() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <p>Manage users, tasks, submissions, and competencies here.</p>
    </MainLayout>
  );
}
