import SearchComponent from '../components/SearchComponent'

export default {
    title: 'SearchComponent',
    component: SearchComponent,
};

export const InitialState = {
    args: {
      defaultValue: "Search!",
      onSearch: (arg) => console.log(arg)
    }  
}
