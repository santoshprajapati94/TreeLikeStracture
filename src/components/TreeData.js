export const menus = 
     [
        {
            label : "Home",
            to: "/",
            children :[
                {
                    label:"Home1",
                    to:"/Home1"
                },
                {
                    label:"Home2",
                    to:"/Home2",
                    Children : [
                        {
                            label:"Home2.1",
                            to:"/Home2.1"
                        },
                    ],
                },
            ],
        },
        {
            label:"City",
            to:"/City",
        },
        {
            label:"Location",
            to:"/Location",
            children : [
                {
                    label:"Location1",
                    to:"/Location1"
                },
                {
                     label:"Location2",
                    to:"/Location2"
                },
            ],
        },
        {
            label:"Update",
            to:"/Update",
            children :[
                {
                    label:"Update1",
                    to:"/Update1"
                },
                {
                    label:"update2",
                    to:"/update2"
                },
            ],
        },
    ]
