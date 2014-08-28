angular.module('testApp', ['angularBootstrapNavTree'])

.controller('TestController', ['$scope',
    function($scope) {

        $scope.sampleData = DATA;

    }
]);


var DATA = [{
    "id": 3,
    "label": "Sample data goes here",
    "parent_id": 0,
    "children": [{
        "id": 86,
        "label": "Sample data goes here",
        "parent_id": 3
    }, {
        "id": 89,
        "label": "Sample data goes here",
        "parent_id": 3
    }, {
        "id": 87,
        "label": "Sample data goes here",
        "parent_id": 3
    }, {
        "id": 88,
        "label": "Sample data goes here",
        "parent_id": 3
    }]
}, {
    "id": 1,
    "label": "Sample data goes here",
    "parent_id": 0,
    "children": [{
        "id": 5,
        "label": "Sample data goes here",
        "parent_id": 1,
        "children": [{
            "id": 25,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 58,
                "label": "Sample data goes here",
                "parent_id": 25
            }]
        }, {
            "id": 24,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 55,
                "label": "Sample data goes here",
                "parent_id": 24
            }, {
                "id": 54,
                "label": "Sample data goes here",
                "parent_id": 24
            }, {
                "id": 56,
                "label": "Sample data goes here",
                "parent_id": 24
            }, {
                "id": 57,
                "label": "Sample data goes here",
                "parent_id": 24
            }, {
                "id": 53,
                "label": "Sample data goes here",
                "parent_id": 24
            }]
        }, {
            "id": 21,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 29,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 27,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 28,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 30,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 32,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 31,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 34,
                "label": "Sample data goes here",
                "parent_id": 21
            }, {
                "id": 33,
                "label": "Sample data goes here",
                "parent_id": 21
            }]
        }, {
            "id": 22,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 42,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 39,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 41,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 37,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 36,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 40,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 38,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 35,
                "label": "Sample data goes here",
                "parent_id": 22
            }, {
                "id": 43,
                "label": "Sample data goes here",
                "parent_id": 22
            }]
        }, {
            "id": 23,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 51,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 49,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 50,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 46,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 44,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 48,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 52,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 47,
                "label": "Sample data goes here",
                "parent_id": 23
            }, {
                "id": 45,
                "label": "Sample data goes here",
                "parent_id": 23
            }]
        }, {
            "id": 26,
            "label": "Sample data goes here",
            "parent_id": 5,
            "children": [{
                "id": 62,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 60,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 64,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 61,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 65,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 67,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 59,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 63,
                "label": "Sample data goes here",
                "parent_id": 26
            }, {
                "id": 66,
                "label": "Sample data goes here",
                "parent_id": 26
            }]
        }]
    }, {
        "id": 6,
        "label": "Sample data goes here",
        "parent_id": 1,
        "children": [{
            "id": 77,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 75,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 71,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 74,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 69,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 76,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 70,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 72,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 68,
            "label": "Sample data goes here",
            "parent_id": 6
        }, {
            "id": 73,
            "label": "Sample data goes here",
            "parent_id": 6
        }]
    }]
}, {
    "id": 2,
    "label": "Sample data goes here",
    "parent_id": 0,
    "children": [{
        "id": 78,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 90,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 91,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 94,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 92,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 96,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 97,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 93,
            "label": "Sample data goes here",
            "parent_id": 78
        }, {
            "id": 95,
            "label": "Sample data goes here",
            "parent_id": 78
        }]
    }, {
        "id": 79,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 104,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 106,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 107,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 100,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 102,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 103,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 105,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 99,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 101,
            "label": "Sample data goes here",
            "parent_id": 79
        }, {
            "id": 98,
            "label": "Sample data goes here",
            "parent_id": 79
        }]
    }, {
        "id": 84,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 132,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 128,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 133,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 130,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 129,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 134,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 131,
            "label": "Sample data goes here",
            "parent_id": 84
        }, {
            "id": 135,
            "label": "Sample data goes here",
            "parent_id": 84
        }]
    }, {
        "id": 83,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 126,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 123,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 122,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 125,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 127,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 124,
            "label": "Sample data goes here",
            "parent_id": 83
        }, {
            "id": 121,
            "label": "Sample data goes here",
            "parent_id": 83
        }]
    }, {
        "id": 81,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 112,
            "label": "Sample data goes here",
            "parent_id": 81
        }, {
            "id": 113,
            "label": "Sample data goes here",
            "parent_id": 81
        }, {
            "id": 111,
            "label": "Sample data goes here",
            "parent_id": 81
        }]
    }, {
        "id": 82,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 120,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 115,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 119,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 114,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 116,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 118,
            "label": "Sample data goes here",
            "parent_id": 82
        }, {
            "id": 117,
            "label": "Sample data goes here",
            "parent_id": 82
        }]
    }, {
        "id": 85,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 136,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 140,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 138,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 143,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 139,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 141,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 142,
            "label": "Sample data goes here",
            "parent_id": 85
        }, {
            "id": 137,
            "label": "Sample data goes here",
            "parent_id": 85
        }]
    }, {
        "id": 80,
        "label": "Sample data goes here",
        "parent_id": 2,
        "children": [{
            "id": 108,
            "label": "Sample data goes here",
            "parent_id": 80
        }, {
            "id": 109,
            "label": "Sample data goes here",
            "parent_id": 80
        }, {
            "id": 110,
            "label": "Sample data goes here",
            "parent_id": 80
        }]
    }]
}];
