
const shuffleCards = () => {
  let  cards= [
        { name: 'cat', icon: '😼',show:false },
        
        { name: 'defuse', icon: '🙅‍♂️',show:false },
        { name: 'explo', icon: '💣',show:false },
        { name: 'shuffle', icon: '🔀',show:false }
      ]
      
      let shuffledCards=[]
      for(let i =0;i<5;i++){
          const randomNumber = Math.floor(Math.random() * 4);
        shuffledCards.push({...cards[randomNumber],id:cards[randomNumber].name+i})
    }

    return shuffledCards;
  };
  

const initialState = {
    win: false,
    loss: false,
    cards: shuffleCards(),
    carry: []
  };
  
  

  
  
export const GameReducer=(state=initialState,action)=>{
   console.log(action)
    switch(action.type){
        case 'cat':{
            if(state.cards.length==0){
                state.win=true
            }
            return {
                ...state,cards:state.cards.filter((e)=>e.id!==action.id)
            }
        }
        case 'shuffle':{
            return initialState
        }
        case 'defuse':{
            if(state.cards.length==0){
                state.win=true
            }
            return {
                ...state,carry:['defuse'],cards:state.cards.filter((e)=>e.id!==action.id)
            }
        }
        case'exploding':{
            if(state.carry.length){
                if(state.cards.length==0){
                    state.win=true
                }
                return {
                    ...state,carry:[],
                    cards:state.cards.filter((e)=>e.id!==action.id)
                }
            }else{
                return {
                    ...state,
                    cards:[],
                    loss:true,
                    win:false
                }
            }
           
        }
        default:
            return initialState
    }


}