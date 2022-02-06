// SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
// import "@openzeppelin/contracts/utils/math/SafeMath.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";


// contract Stake is ERC20, Ownable {
//     using SafeMath for uint256;

//     constructor(address _owner, uint256 _supply) public {
//        _mint(_owner, _supply);
//     }

//     address[] internal stakeholders;
//     mapping(address => uint256) internal stakes;


//     function isStakeholder(address _address) public view returns (bool, uint256) {
//         for ( uint256 s = 0; s < stakeholders.length; s+=1 ) {
//             if (_address == stakeholders[s] )  {
//                 return (true, s);
//             }

//         }
//         return (false, 0);
//     }


//     function addStakeholder(address _stakeholder) public {
//         (bool _isStakeholder, ) = isStakeholder(_stakeholder);
//         if(!_isStakeholder) {
//             stakeholders.push(_stakeholder);
//         }
//     }

//     function removeStakeholder(address _stakeholder) public {
//         (bool _isStakeholder, uint s) = isStakeholder(_stakeholder);
//         if(_isStakeholder) {
//             stakeholders[s] = stakeholders[stakeholders.length-1];
//             stakeholders.pop();
//         }
//     }

//     function stakeOf(address _stakeholder) public view returns (uint256) {
        
//         return stakes[_stakeholder];
//     }

//     function totalStakes() public view returns (uint256) {
//         uint256 _totalStakes = 0;
//         for ( uint256 s = 0; s < stakeholders.length; s+=1 ) {
//             _totalStakes += stakes[stakeholders[s]];
//         }
//     }


// }