import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTitle = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => { 
  return (
    <TabsContainer>
      <Topics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map(tab => (
              <Tab 
                key={tab} 
                tab={tab}
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
              />
            ))
            }
      </Topics>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.shape({
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string,
    tabs: PropTypes.array
  })
}

export default Tabs;
