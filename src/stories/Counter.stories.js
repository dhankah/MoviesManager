import CounterComponent from '../components/CounterComponent';

export default {
  title: 'CounterComponent',
  component: CounterComponent,
};

export const InitialState = {
    args: {
      initialValue: 0
    }  
  }

export const Incremented = {
    args: {
      initialValue: 5
    }  
  }

export const Decremented = {
    args: {
        initialValue: -5    
      }  
}
