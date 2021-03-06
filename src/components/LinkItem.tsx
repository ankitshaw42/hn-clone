import React from 'react';

import { Link } from 'react-router-dom';

import { Link as ILink } from '../interfaces';

interface LinkItemProps {
  link: ILink;
  showComments?: boolean;
}

export default function LinkItem({ link, showComments = true }: LinkItemProps) {
  const {
    id,
    points,
    comments_count,
    url,
    title,
    domain,
    user,
    time_ago,
    type,
  } = link;

  const isJobPosting = type === 'job';

  const linkPoints = !isJobPosting && (
    <span className="font-bold text-orange-500 pr-2 w-10">{points || 0}</span>
  );

  const userInfo = user && (
    <span className="mr-2 ">
      by{' '}
      <Link className="text-blue-700 hover:underline" to={`/user/${user}`}>
        {user}
      </Link>
    </span>
  );

  const commentsLink = !isJobPosting && showComments && (
    <Link to={`/link/${id}`} className="text-blue-700 hover:underline">
      {comments_count === 0 ? ' no comments' : ` ${comments_count} comments`}
    </Link>
  );

  return (
    <li className="bg-gray-100 rounded-md my-4 p-3 text-sm md:text-base flex items-center shadow hover:shadow-md transition-shadow duration-150 ease-in-out">
      {linkPoints}

      <div className="flex-1">
        <div className="mb-1">
          <a
            href={url}
            className="mr-1 text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            {title}
          </a>

          <span className="text-gray-600 text-xs">{domain}</span>
        </div>

        <div className="text-xs">
          {userInfo}

          <span className="mr-2">{time_ago}</span>

          {commentsLink}
        </div>
      </div>
    </li>
  );
}
