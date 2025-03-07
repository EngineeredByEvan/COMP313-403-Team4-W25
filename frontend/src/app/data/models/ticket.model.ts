export interface Ticket {
  title: string;
  description: string;
  employee: string; //mongoose.Schema.Types.ObjectId of (User) employee
  assignedTo: string; //mongoose.Schema.Types.ObjectId of (User) HR Employee
  status: string; //enum: ['Open', 'In Progress', 'Resolved', 'Closed'], default: 'Open'
  pritority: string; //enum: ['Low', 'Medium', 'High'], default: 'Medium'
  category: string;
  sentiment: string; // enum: ['positive', 'neutral', 'negative'], default: 'neutral'
  comments: [
    {
      user: string; //user who wrote message in chat
      message: string; //text of message
      timestamp: Date; //when message was sent
    }
  ];
  attachments: string[];
  createdAt: Date;
  updatedAt: Date;
}
// export interface Ticket {
//   id: number;
//   userId: number; //user to whom this task belongs to
//   status: StatusEnum; //open, missing documents(attention required), closed, etc.
//   title: string;
//   description: string;
//   dateAndTimeOfCreation: string;
// }
