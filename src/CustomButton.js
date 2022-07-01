import React from 'react';
import { Button } from '@mui/material';

export default function CustomButton({
  onClick,
  children,
  color = 'black',
  coolColor = 'lightyellow', 
  border = 'dotted',
  margin = '10px',
}) {
  return (
    <Button className="custom-button" 
      onClick={onClick}
      sx={{
        color: color,
        background: coolColor,
        border: border,
        margin: margin,
      }}>
      {children} 
    </Button>
  ); 
}

export function AnotherButton({
  onClick,
  children,
  color = 'black',
  coolColor = 'rosybrown', 
  border = 'dotted',
  margin = '10px',
}) {
  return (
    <Button className="another-button" 
      onClick={onClick}
      sx={{
        color: color,
        background: coolColor,
        border: border,
        margin: margin,
      }}>
      {children} 
    </Button>
  ); 
}

export function SignButton({
  onClick,
  children,
  color = 'black',
  coolColor = 'papayawhip', 
  border = 'dotted',
  margin = '10px',
}) {
  return (
    <Button className="sign-button" 
      onClick={onClick}
      sx={{
        color: color,
        background: coolColor,
        border: border,
        margin: margin,
      }}>
      {children} 
    </Button>
  ); 
}
export function MusicButton({
  onClick,
  children,
  color = 'black',
  coolColor = 'rosybrown', 
  border = 'dotted',
  margin = '10px',
}) {
  return (
    <Button className="music-button" 
      onClick={onClick}
      sx={{
        color: color,
        background: coolColor,
        border: border,
        margin: margin,
      }}>
      {children} 
    </Button>
  ); 
}

