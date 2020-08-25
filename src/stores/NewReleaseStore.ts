import NewRel from '../NewRel';

class NewReleaseStore {

    createNewRelease = () =>{
        const NewRel1 = new NewRel(1,1,"pants-spor",'png');
        const NewRel2 = new NewRel(2,2,"shoe-women-casual",'png');
        const NewRel3 = new NewRel(3,3,"winter-jacket",'png');
        const NewRel4 = new NewRel(4,4,"jexxi-ring",'png');
        
        const NewRel5 = new NewRel(5,5,"pants-spor",'png');
        const NewRel6 = new NewRel(6,6,"shoe-women-casual",'png');
        const NewRel7 = new NewRel(7,7,"winter-jacket",'png');
        const NewRel8 = new NewRel(8,8,"jexxi-ring",'png');
        
        
        return [NewRel1,NewRel2,NewRel3,NewRel4,
            NewRel5,NewRel6,NewRel7,NewRel8,
            ];
    }

    getNewRelById = (id:number) => {
        let NewReleaseList = this.createNewRelease();
        for(let i = 0;  i < this.createNewRelease().length;i++){
            if(NewReleaseList[i].id == id){
                return NewReleaseList[i];
            }
        }
        return undefined;
    }
}


export default new NewReleaseStore();