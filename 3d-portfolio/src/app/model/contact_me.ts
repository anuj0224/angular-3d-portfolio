// contact-me.model.ts
export interface ContactMe {
  id: number; // Optional for new entries
  sender_name: string; // Name of the sender
  sender_email: string; // Email of the sender
  description: string; // Optional description/message from the sender
  sending_time: Date; // Optional sending time
}
