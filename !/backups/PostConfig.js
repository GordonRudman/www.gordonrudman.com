/**
 * Copyright (c) 2006-2020, JGraph Ltd
 * Copyright (c) 2006-2020, draw.io AG
 */
// null'ing of global vars need to be after init.js
window.VSD_CONVERT_URL = null;
window.EMF_CONVERT_URL = null;
window.ICONSEARCH_PATH = null;
window.DRAWIO_CONFIG = { 
                            "showStartScreen":false,
                            "search":false,
                            "defaultLibraries":"eventstorming-all",
                            "enabledLibraries":[ "eventstorming-all,eventstorming-basics,eventstorming-implementationDetails,eventstorming-references,eventstorming-extras" ],
                            "libraries":[ 
                                            { 
                                                "title":{"main":"Event Storming"},
                                                "entries":[ 
                                                            { 
                                                                "id":"eventstorming-all",
                                                                "title":{"main":"All"},
                                                                "desc":{"main":"Everything you need in one place"},
                                                                "libs":[ 
                                                                            { 
                                                                                "title":{"main":"Basics"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-basics.xml"
                                                                            },
                                                                            { 
                                                                                "title":{"main":"References"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-referencelinks.xml"
                                                                            },
                                                                            { 
                                                                                "title":{"main":"Implementation Details"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-implementationDetails.xml"
                                                                            },
                                                                            { 
                                                                                "title":{"main":"Extras"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-extras.xml"
                                                                            }                                                                   
                                                                        ]
                                                            },
                                                            { 
                                                                "id":"eventstorming-basics",
                                                                "title":{"main":"Basics"},
                                                                "desc":{"main":"Traditional Event Storming objects"},
                                                                "libs":[ 
                                                                            { 
                                                                                "title":{"main":"Basics"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-basics.xml"
                                                                            }
                                                                        ]
                                                            },
                                                            { 
                                                                "id":"eventstorming-references",
                                                                "title":{"main":"References"},
                                                                "desc":{"main":"Refer to objects you've already created"},
                                                                "libs":[ 
                                                                            { 
                                                                                "title":{"main":"References"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-referencelinks.xml"
                                                                            }
                                                                        ]
                                                            },
                                                            { 
                                                                "id":"eventstorming-implementationDetails",
                                                                "title":{"main":"Implementation Details"},
                                                                "desc":{"main":"Objects needed to turn Event storm diagrams into code"},
                                                                "libs":[ 
                                                                            { 
                                                                                "title":{"main":"Implementation Details"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-implementationDetails.xml"
                                                                            }
                                                                        ]
                                                            },
                                                            { 
                                                                "id":"eventstorming-extras",
                                                                "title":{"main":"Extra"},
                                                                "desc":{"main":"Extra objects to help you out"},
                                                                "libs":[ 
                                                                            { 
                                                                                "title":{"main":"Extras"},
                                                                                "url":"https://raw.githubusercontent.com/GordonRudman/eventstorm/master/!/libraries/eventStorming-extras.xml"
                                                                            }
                                                                        ]
                                                            }

                                                ]
                                            } 
                                        ]
                        }
// window.DRAWIO_CONFIG = {"css": ".geMenubarContainer { background-color: #F08705 !important; } .geMenubar { background-color: #F08705 !important; }"}