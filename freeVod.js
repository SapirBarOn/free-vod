const data = require("./data/free.json");


module.exports = {

    getAllContents(){
        return data.free;
    },

    getByCategory(category){
        let foundCaterogy = false;
            found = [];

        for(let i in data.free){
            var free = data.free[i];
            if(free.subjectName == category){
                foundCaterogy = true;
                for(let i in free.contents){
                    found.push(free.contents[i]);
                }      
            }
        }

        if(!foundCaterogy)  return null;

        return found;
    },

    getByCategoryAndViews(category,views){
        let foundCategoryViews = false,
        found = [];
        for(let i in data.free){
            var free = data.free[i];
            if(free.subjectName == category){
                for(let j in free.contents){
                    var content = free.contents[j];
                    if(content.views >= views){
                        foundCategoryViews = true;
                        found.push(content);
                    }
                }
            }
        }

        if(!foundCategoryViews)  return null;

        return found;
    }


};



