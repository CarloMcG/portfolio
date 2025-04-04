import React from "react";
import { Grid, Column, Table, TableHead, TableHeader, TableRow, TableCell, TableBody, Tab, Tabs, TabList, TabPanel, TabPanels } from "@carbon/react";
import Nav from "./Nav";

function Education() {

  const rows1 = [
    {
      Module: 'Security in the Enterprise',
      Grade: '71%',
    },
    {
      Module: 'Computer and Cloud Security',
      Grade: '46%',
    },
    {
      Module: 'Applied Cryptography',
      Grade: '61%',
    },
    {
      Module: 'Network Security',
      Grade: '58%',
    },
    {
      Module: 'Research Methods & Professional Practice',
      Grade: '56%',
    },
    {
      Module: 'Engineering Team Project',
      Grade: '87%',
    },
    {
      Module: 'Work Placement & Professional Practice',
      Grade: 'PASS',
    },
    {
      Module: 'Object Oriented Programming I',
      Grade: '56%',
    },
    {
      Module: 'Object Oriented Programming II',
      Grade: '54%',
    }
  ];

  const rows2 = [
    {
      Id: 1,
      Module: 'Professional Skills 1',
      Grade: '61%',
    },
    {
      Id: 1,
      Module: 'Computing Systems',
      Grade: '42%',
    },
    {
      Id: 1,
      Module: 'Algorithms & Information Systems',
      Grade: '47%',
    },
    {
      Id: 1,
      Module: 'Fundamentals of Electrical & Electronic Engineering',
      Grade: '53%',
    },
    {
      Id: 1,
      Module: 'Programming I',
      Grade: '49%',
    },
    {
      Id: 1,
      Module: 'Next Generation Technologies I',
      Grade: '48%',
    },
    {
      Id: 1,
      Module: 'Mathematics',
      Grade: '42%',
    },
    {
      Id: 1,
      Module: 'Introduction to Physics',
      Grade: '44%',
    }
  ];

  const rows3 = [
    {
      Id: 1,
      Module: 'Discrete Mathematics',
      Grade: '35%',
    },
    {
      Id: 1,
      Module: 'Software Engineering I',
      Grade: '53%',
    },
    {
      Id: 1,
      Module: 'Object-Oriented Programming I',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Introduction to Statistical Data & Probability',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Database Systems I',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Computer Systems & Organisation',
      Grade: '35%',
    },
    {
      Id: 1,
      Module: 'Networks & Data Communications I',
      Grade: '36%',
    },
    {
      Id: 1,
      Module: 'Object-Oriented Prograaming: Data Structures & Algorithms',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Linear Algebra',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Introduction to Modelling',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Next Generation Technologies II',
      Grade: '40%',
    }
  ];

  const rows4 = [
    {
      Id: 1,
      Module: 'Professional Skills',
      Grade: '77%',
    },
    {
      Id: 1,
      Module: 'Programming III',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Networks & Data Communications OO',
      Grade: '41%',
    },
    {
      Id: 1,
      Module: 'Database Systems II',
      Grade: '55%',
    },
    {
      Id: 1,
      Module: 'Organisational Innovation',
      Grade: '68%',
    },
    {
      Id: 1,
      Module: 'Software Engineering II',
      Grade: '82%',
    },
    {
      Id: 1,
      Module: 'Human Computer Interaction',
      Grade: '40%',
    },
    {
      Id: 1,
      Module: 'Programming Paradigms',
      Grade: '62%',
    },
    {
      Id: 1,
      Module: 'Games Programming',
      Grade: '40%',
    }
  ];

  const rows5 = [
    {
      Id: 1,
      Module: 'Advanced Professional Skills',
      Grade: '68%',
    },
    {
      Id: 1,
      Module: 'Software Engineering III',
      Grade: '53%',
    },
    {
      Id: 1,
      Module: 'Information Retrieval',
      Grade: '46%',
    },
    {
      Id: 1,
      Module: 'Systems Modelling & Simulation',
      Grade: '49%',
    },
    {
      Id: 1,
      Module: 'Machine Learning',
      Grade: '51%',
    },
    {
      Id: 1,
      Module: 'Artificial Intelligence',
      Grade: '51%',
    },
    {
      Id: 1,
      Module: 'Real Time Systems',
      Grade: '46%',
    },
    {
      Id: 1,
      Module: 'Distributed Systems & Co-Operative Computing',
      Grade: '47%',
    },
    {
      Id: 1,
      Module: 'Cryptography',
      Grade: '45%',
    },
    {
      Id: 1,
      Module: 'Computer Security & Forensic Computing',
      Grade: '61%',
    },
    {
      Id: 1,
      Module: 'Final Year Project',
      Grade: '62%',
    }
  ];

  const headers = [
    {
      key: 'Module',
      header: 'Module',
    },
    {
      key: 'Grade',
      header: 'Grade',
    },
  ];


  function DemoContent({
    children
  }) {
    return <div className="outside">
      <div className="inside">{children}</div>
    </div>;
  }

  const DataTable = ({ data }) => (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Module</TableHeader>
          <TableHeader>Grade</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={index}>
            <TableCell>{row.Module}</TableCell>
            <TableCell>{row.Grade}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );


  return (
    <Grid>
      <Column lg={16} md={8} sm={4} style={{ marginTop: '80px' }}>
        <Nav />
      </Column>

      {/* Content Below */}
      <Column lg={16} md={12} sm={8} style={{ marginTop: '80px' }}>
        <Grid>
          {/* Main Title and Image side by side */}
          <Column md={6} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">MSc Software Design with Cyber Security</h1>
            <h2 className="bx--type-expressive-heading-01">Second Class Honours</h2>
            <h3 className="bx--type-expressive-heading-01">Technological University of the Shannon, Athlone</h3>
            <h4 className="bx--type-expressive-heading-01">September 2022 - May 2023</h4>
          </Column>
          <Column md={6} lg={288} sm={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
            <DataTable data={rows1} />
          </Column>
        </Grid >
      </Column >
      <Column lg={16} md={12} sm={8} style={{ marginTop: '20px' }}>
        <Grid>
          {/* Main Title and Image side by side */}
          <Column md={6} lg={8} sm={4}>
            <h1 className="bx--type-expressive-heading-01">BSc Computer Science & Information Technology</h1>
            <h2 className="bx--type-expressive-heading-01">Second Class Honours</h2>
            <h3 className="bx--type-expressive-heading-01">National University of Ireland, Galway</h3>
            <h4 className="bx--type-expressive-heading-01">September 2016 - May 2021</h4>
          </Column>
          <Column md={6} lg={288} sm={4} style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Tabs>
              <TabList contained>
                <Tab>First Year</Tab>
                <Tab>Second Year</Tab>
                <Tab>Third Year</Tab>
                <Tab>Fourth Year</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <DataTable data={rows2} />
                </TabPanel>
                <TabPanel>
                  <DataTable data={rows3} />
                </TabPanel>
                <TabPanel><DataTable data={rows4} /></TabPanel>
                <TabPanel><DataTable data={rows5} /></TabPanel>
              </TabPanels>
            </Tabs>
          </Column>
        </Grid >
      </Column >
    </Grid >
  );
}

export default Education;
