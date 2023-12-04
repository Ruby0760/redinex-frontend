
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import AnalyticsForm from './AnalyticsForm';
import DataForm from './DataForm';


const Dashboard = () => {

  const [tabNumber, setTabNumber] = useState("1");

  const handleTabChange = (event, newValue) => {
    setTabNumber(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={tabNumber}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
              <Tab label="Analitcs" value="1" />
              <Tab label="Data" value="2" />

            </TabList>
          </Box>
          <TabPanel value={"1"}>
            <AnalyticsForm/>
          </TabPanel>
          <TabPanel value={"2"}>
            <DataForm/>
          </TabPanel>
        </TabContext>
      </Box>
    </>
  )
}
export default Dashboard;