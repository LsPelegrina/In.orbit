import { db } from "../db";

interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({ title, desiredWeeklyFrequency } : CreateGoalRequest) {
  await db.
}