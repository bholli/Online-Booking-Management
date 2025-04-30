import React, { FC } from "react";
import Avatar from "@/shared/Avatar";

export interface CommentListingProps {
  className?: string;
}

// Sample comments data
const DEMO_COMMENTS = [
  {
    id: "1",
    author: "Jane Cooper",
    date: "May 20, 2023",
    content: "This clinic was incredibly helpful for my long COVID symptoms. The staff was knowledgeable and compassionate. They provided a comprehensive treatment plan that has significantly improved my quality of life.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: "2",
    author: "Michael Johnson",
    date: "April 15, 2023",
    content: "I've been struggling with fatigue and brain fog for months after COVID. This clinic has specialists who understand these symptoms and don't dismiss them. They're helping me navigate my recovery journey.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  },
];

const CommentListing: FC<CommentListingProps> = ({ className = "" }) => {
  return (
    <div className={`nc-CommentListing ${className}`}>
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200 flex items-center">
        <span>{DEMO_COMMENTS.length} comments</span>
      </h3>
      <ul className="space-y-5 mt-5">
        {DEMO_COMMENTS.map((item) => (
          <li
            key={item.id}
            className="nc-CommentCard flex"
          >
            <Avatar
              sizeClass="h-10 w-10 sm:h-11 sm:w-11"
              imgUrl={item.avatar}
              userName={item.author}
            />
            <div className="flex-1 ml-3 space-y-1">
              <div className="flex items-center">
                <span className="text-neutral-900 dark:text-neutral-200 font-semibold">
                  {item.author}
                </span>
                <span className="mx-2">·</span>
                <span className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {item.date}
                </span>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300">
                {item.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentListing;
