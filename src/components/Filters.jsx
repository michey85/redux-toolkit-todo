import { Badge, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { changeFilter } from '../store/filterSlice';

const Filters = () => {
  const dispatch = useDispatch();

  return (
    <Flex justifyContent={'space-around'} mt={4}>
      <Badge colorScheme={'orange'} onClick={() => dispatch(changeFilter('all'))}>All</Badge>
      <Badge colorScheme={'blue'} onClick={() => dispatch(changeFilter('completed'))}>Completed</Badge>
      <Badge colorScheme={'green'} onClick={() => dispatch(changeFilter('active'))}>Active</Badge>
    </Flex>
  );
}

export default Filters;
