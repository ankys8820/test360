const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose");

const startupSchema=new Schema({
    name:{
        type : String,
        required: true,
    },
    companyName:{
        type : String,
        required: true,
    },
    regPhoneNo:{
        type : Number,
        required: true,
    },
    workEmail :{
        type :String,
        required : true,
    },
    companyCategory :{
        type :String,
    },
    companySize :{
        type :Number,
    },
    facilities : {
        physicalAndVirtualInfrastructure : {
            officeSpace:{
                type : Number,
            },
            noOfMeetingRooms :{
                type : Number,
            },
            itInfrastructure: {
                computers:{
                    type : Number,
                },
                printers:{
                    type : Number,
                },
                others:{
                    type : String,
                }
            },
            utilities :[ String ],
            remoteWorkTools :{ 
                type : Boolean,
            },
        },
        HR : [ String ],
        financialResources: { type : Boolean, },
        supportServices : [ String ],
        HRmanagement : [ String ],
        operationalToolsAndManagement : [ String ],
        insurance: { 
            type: Boolean,
        },
    },
});

startupSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("Startup",startupSchema);