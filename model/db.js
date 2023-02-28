var fs = require('fs');

class DB {
    constructor(nameDepartment, startYear, category = []) {
        this.nameDepartment = nameDepartment;
        this.startYear = startYear;
        this.category = category;
    }

    static async getCourseExample(){
        let rawdata = fs.readFileSync('data/mock_up_data/course.json');
        let data = JSON.parse(rawdata);
        let objData = Course.jsonToObj(data);

        return objData;
    }

    static async getGradesExample(){
        let rawdata = fs.readFileSync('data/mock_up_data/grades.json');
        let data = JSON.parse(rawdata);

        return data;
    }

    static async writeCourse(name, startYear, objdata){
        fs.writeFile(`data/course/${name}-${startYear}.json`, JSON.stringify(objdata), function(err) {
            if (err) {
                console.log(err);
                return false;
            } else {
                return true;
            }
        });
    }
}

module.exports = DB;