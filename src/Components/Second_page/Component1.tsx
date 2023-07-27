import React, { useState, useEffect } from 'react';
import {Container, Typography} from '@mui/material';
import Post from './PostModel';
import PostTable from './PostTable';
import DepartmentList from './DepartmentList';


const departmentData = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];
const SecondPage: React.FC = () => {
    const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');    
    
      const [posts, setPosts] = useState<Post[]>([]);
    
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data: Post[]) => setPosts(data))
          .catch((error) => console.error("Error fetching data:", error));
      }, []);

    
    

    
      return (
        <>
        <Container maxWidth="sm">
          <Typography variant="h2" component="h5" gutterBottom>
            Welcome to the Second Page!
          </Typography>
          <Typography variant="body2">Name: {userDetails.name}</Typography>
          <Typography variant="body2">Phone Number: {userDetails.phone}</Typography>
          <Typography variant="body2">Email: {userDetails.email}</Typography>
          <PostTable posts={posts} />
      <h1>Department List</h1>
      <DepartmentList departments={departmentData} />
        </Container>
    </>
      );
    };
  export default SecondPage;