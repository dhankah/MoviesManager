import SortControl from '../components/SortControl';


export default {
  title: 'SortControl',
  component: SortControl
};

export const InitialState = {
    args: {
      currentSortOptionInput: "Title",
      handleSelect: (arg) => console.log(arg)
    }  
}
  