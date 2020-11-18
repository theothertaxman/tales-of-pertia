import React from 'react';
import { Avatar } from '@material-ui/core';

type UserAvatarProps = {
    imageSource?: string;
};

export default function UserAvatar(props: UserAvatarProps) {
    return props.imageSource ? <Avatar src={props.imageSource} /> : <Avatar> F </Avatar>;
}
