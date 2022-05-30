import { Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const TotalInfo = () => {
  const count = useSelector(state => state.todos.list.length);

  return (
    <Flex justifyContent={'center'} borderTop={'2px'} mt="5">
      <b>Total todos: {count}</b>
    </Flex>
  )
}

export default TotalInfo;