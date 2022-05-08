import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs({
  tabItems = [
    {
      label: 'How to Use Tabs',
      value: '1',
      component: (
        <div>
          Hey, make sure to pass an array of items with the following schema:&nbsp;
          <code>{JSON.stringify(`{label: 'your_label', value: '_id', component: <></>}`)}</code>
        </div>
      ),
    },
  ],
}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabItems.map((item) => (
              <Tab key={item.value} label={item.label} value={item.value} />
            ))}
          </TabList>
        </Box>
        {tabItems.map((item) => (
          <TabPanel key={item.value} value={item.value}>
            {item.component}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
