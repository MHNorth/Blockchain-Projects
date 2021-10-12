pragma solidity ^0.6.0;

contract SimpleStorage {

    bool favoriteBool;
    bool favoriteBool2;
    string favoriteString = "String";
    int256 favoriteInt = -5;
    address favoriteAddress = 0x75773071458Df6F83cFb6E02586Ff992Cf736709;
    bytes32 favoriteBytes = "cat";
    

    // favoriteNumber will get initialized to 0!
    // uint256 public favoriteNumber;
    // function store(uint256 _favoriteNumber) public {
    //     favoriteNumber = _favoriteNumber;
    // }
// pure and view functions return values using keywords 
//  View reads off the blockchain without making a state change
//  Pure functions performs mathematical calculations

    uint256 favoriteNumber;

 

    function store(uint256 _favoriteNumber) public {
        favoriteNumber = _favoriteNumber + _favoriteNumber;
    }

    function retrieve() public view returns(uint256) {
        return favoriteNumber;
    }
    
    struct People {
        uint256 favoriteNumber;
        string name;
    }
    
    People public person = People({favoriteNumber: 3, name: "Maika"});
    
}