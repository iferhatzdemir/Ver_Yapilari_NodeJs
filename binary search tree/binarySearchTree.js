//ilk olarak node ve tree yapısını oluşturmamız gerekmektedir
class node {
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class binarySearchTree{
    constructor(){
        this.root=null;
    }
    //ağaca artık node eklememiz gerekmektedir.
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while(current){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    //düğümü bulmak istersek
    find(value){
        if(!this.root) return false
        
        let current = this.root
        let found = false
        while(current && !found){
              if(value < current.value){
                current = current.left
               } else if(value > current.value){
                  current = current.right
               } else {
                    found = current
               } 
              
              }
      
          if(!found) return undefined;
          return found
        
    
    }
}