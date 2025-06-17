export const CHANGE_THEME='toggle_change_theme';
export const INCREMENT_COUNT='increment_count';

export const toggleTheme=()=>{
      console.log("toggle action  log=============",)
    return{
        type:CHANGE_THEME,
      

    }
};

export const IncrementCountValue=(value:number)=>{
          console.log("inccre action value =============",value)

    return{
        type:INCREMENT_COUNT,
        payload:value,
    }
}

