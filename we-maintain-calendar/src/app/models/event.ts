export interface Event {
  id: string;
  date: Date;
  startTime: number;
  duration: number;
  name: string;
  description: string;
  attendees: string[];
}
