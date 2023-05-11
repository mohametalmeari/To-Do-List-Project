const UpdateToDoList = () => {
    if (typeof localStorage.getItem('to_do_list') !== 'undefined' && localStorage.getItem('to_do_list') !== null) {
      return JSON.parse(localStorage.getItem('to_do_list'));
    } else {
      return [];
    }
  };

  export default UpdateToDoList;