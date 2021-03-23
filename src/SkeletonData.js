import React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Skeleton from '@material-ui/lab/Skeleton'

export default function SkeletonData() {
  return (
    <>
      <div className="skeleton">
        <div className="skeleton-head">
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
        <div className="skeleton-row">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
        <div className="skeleton-row">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
        <div className="skeleton-row">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
        <div className="skeleton-row">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
        <div className="skeleton-row">
          <Skeleton variant="circle">
            <Avatar />
          </Skeleton>
          <Skeleton width="100%">
            <Typography>-</Typography>
          </Skeleton>
        </div>
      </div>
    </>
  )
}
