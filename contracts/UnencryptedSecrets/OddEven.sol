// SPDX-License-Identifier: MIT
// pragma solidity ^0.4.18;
// pragma solidity ^0.5.1;

/*
 * @source: https://gist.github.com/manojpramesh/336882804402bee8d6b99bea453caadd#file-odd-even-sol
 * @author: https://github.com/manojpramesh
 * Modified by Kaden Zipfel
 */

pragma solidity ^0.6.0;

import "@nomiclabs/buidler/console.sol";

contract OddEven {

    struct Player {
        address addr;
        uint number;
    }

    Player[2] private players;
    uint count = 0;

    function play(uint number) public payable {
            require(msg.value == 10 ether, 'msg.value must be 10 eth');

            console.log( "arg addr[%s] val[%s]", msg.sender, number );

            console.log( "Cont bal[%s]", address(this).balance );

            players[count] = Player(msg.sender, number);

            console.log( "addr[%s]::numb[%s]", players[count].addr, players[count].number );

            // players[count].addr = msg.sender;
            // players[count].number = number;

            count++;
            if (count == 2) selectWinner();
    }

    function selectWinner() private {
            uint n = players[0].number + players[1].number;
            (bool success, ) = players[n%2].addr.call.value(address(this).balance)("");
            require(success, 'transfer failed');
            delete players;
            count = 0;
    }

}
