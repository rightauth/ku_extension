class Category {
    constructor(categoryName, expression = null, atLeastCredit = 0) {
        this.categoryName = categoryName;
        this.expression = expression;
        this.atLeastCredit = atLeastCredit;
        this.subCategory = [];
        this.subjects = [];
        this.calculateAtLeastCredit();
    }

    addSubCategory(subCategory){
        this.subCategory.push(subCategory);
        this.calculateAtLeastCredit();
    }

    addSubCategoryList(listSubCategory){
        this.subCategory = [...this.subCategory, ...listSubCategory]
        this.calculateAtLeastCredit();
    }

    calculateAtLeastCredit(){
        if (this.subCategory.length > 0){
            var creditsum = 0;
            for (var x of this.subCategory){
                creditsum += x.atLeastCredit;
            }
        }
    }

    static jsonToObj(jsondata){
        Object.assign(new Category, jsondata);

        if (jsondata.subCategory.length >= 1){
            for (var x of jsondata.subCategory){
                Category.jsonToObj(x);
            }
        }
    }
}

module.exports = Category;