import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

interface Department {
  department: string;
  sub_departments: string[];
}

interface DepartmentListProps {
  departments: Department[];
}

const DepartmentList: React.FC<DepartmentListProps> = ({ departments }) => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<{ [key: string]: Set<string> }>({});

  const handleToggleDepartment = (department:string) => {
    const currentIndex = selectedDepartments.indexOf(department);
    const newSelectedDepartments = [...selectedDepartments];

    if (currentIndex === -1) {
      newSelectedDepartments.push(department);
      // Select all sub-departments
      const subDepartments = departments.find((dept) => dept.department === department)?.sub_departments || [];
      const newSelectedSubDepartments = { ...selectedSubDepartments, [department]: new Set(subDepartments) };
      setSelectedSubDepartments(newSelectedSubDepartments);
    } else {
      newSelectedDepartments.splice(currentIndex, 1);
      // Deselect all sub-departments
      const newSelectedSubDepartments = { ...selectedSubDepartments };
      delete newSelectedSubDepartments[department];
      setSelectedSubDepartments(newSelectedSubDepartments);
    }

    setSelectedDepartments(newSelectedDepartments);
  };

  const handleToggleSubDepartment = (department: string, subDept: string) => {
    const currentSelectedSubDepartments = selectedSubDepartments[department] || new Set<string>();
    const newSelectedSubDepartments = new Set<string>(currentSelectedSubDepartments);

    if (currentSelectedSubDepartments.has(subDept)) {
      newSelectedSubDepartments.delete(subDept);
    } else {
      newSelectedSubDepartments.add(subDept);
    }

    const newSelectedSubDepartmentsObj = { ...selectedSubDepartments, [department]: newSelectedSubDepartments };
    setSelectedSubDepartments(newSelectedSubDepartmentsObj);

    // Check if all sub-departments are selected to select the parent department
    const allSubDepartments = departments.find((dept) => dept.department === department)?.sub_departments || [];
    const isAllSubDepartmentsSelected = allSubDepartments.every((subDept) => newSelectedSubDepartments.has(subDept));

    const currentSelectedDepartments = new Set<string>(selectedDepartments);
    if (isAllSubDepartmentsSelected) {
      currentSelectedDepartments.add(department);
    } else {
      currentSelectedDepartments.delete(department);
    }

    setSelectedDepartments(Array.from(currentSelectedDepartments));
  };

  return (
    <List component="nav">
      {departments.map((department) => {
        const isDepartmentSelected = selectedDepartments.includes(department.department);

        return (
          <Box key={department.department}>
            <ListItemButton onClick={() => handleToggleDepartment(department.department)}>
              <Checkbox checked={isDepartmentSelected} onChange={() => handleToggleDepartment(department.department)} />
              <ListItemText primary={department.department} />
              {isDepartmentSelected ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={isDepartmentSelected} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {department.sub_departments.map((subDept) => {
                  const isSubDeptSelected =
                    selectedSubDepartments[department.department] && selectedSubDepartments[department.department].has(subDept);

                  return (
                    <ListItemButton
                      sx={{ pl: 4 }}
                      key={subDept}
                      onClick={() => handleToggleSubDepartment(department.department, subDept)}
                    >
                      <Checkbox
                        checked={isSubDeptSelected}
                        onChange={() => handleToggleSubDepartment(department.department, subDept)}
                      />
                      <ListItemText primary={subDept} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </Box>
        );
      })}
    </List>
  );
};

export default DepartmentList;