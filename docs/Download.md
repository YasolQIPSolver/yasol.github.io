# Download

### Solver for Quantified Mixed Integer Programs

Since Yasol has no own built-in LP solver you either need to install IBM® ILOG® CPLEX® Optimization Studio or the COIN-OR Optimization Suite in order to use our solver. Our solver makes intensive use of their linear program solver. These tools are black-box used, but it is our intention not to use the integer solving abilities of these foreign solvers.

You can download the source code and build the project using the provided batch files for the following operating systems:

* [Mac OS](#getting-started-on-mac-os-and-linux)
* [Linux](#getting-started-on-mac-os-and-linux)
* [Windows](#getting-started-on-windows)
---
### QMIP Instances in the QLP File Format

In order to solve Q-MIPs with Yasol, the instances have to be available in QLP file format. We provide a number of [test instances](Instances.md).

---

### Getting started on Windows

Since Yasol has no own built-in LP solver you either need to install IBM® ILOG® CPLEX® Optimization Studio or the COIN-OR Optimization Suite in order to use our solver. For download- and license information of these extern tools, we refer to the corresponding webpages of <a href=https://community.ibm.com/community/user/legacy?lang=en target="_blank">CPLEX®</a> and <a href=https://www.coin-or.org/ target="_blank">Coin-OR</a>.

In order to execute our batch file that builds the project your systems must be able to run makefiles. One possible way of doing so is to use the <a href=https://learn.microsoft.com/en-us/cpp/build/building-on-the-command-line?view=msvc-170&redirectedfrom=MSDN target="_blank">Developer Command Prompt</a>, which is accessible if you are using Microsoft Visual Studio.  

In order to use Yasol on Windows you need to perform the following steps:

1. Download the current Yasol version (3.9.9.3.1 from 2020; the latest version from 2023 is currently only available for Mac and linux) and unpack it (Download).
2. Open the x64 Developer Command Prompt.
3. change your directory to the Yasol main folder.
4. Provide the location of your compiler by setting the variable CC. We recommend clang++. This might look like
    * set CC="C:/Program Files/LLVM/bin/clang++"
5. Provide your folder containing COIN OR (CPLEX) by setting the variable YASOL_CLP_PATH (YASOL_CPLEX_PATH). This might look like
    * set YASOL_CPLEX_PATH="C:/Program Files/IBM/ILOG/CPLEX_Studio1261/cplex"
    * set YASOL_CLP_PATH="C:/Program Files/Cbc-2.9.0"
6. Execute the batch file build_clp (build_cplex) which you should find in the main folder. This will build the executable Yasol_CLP (Yasol_CPLEX) in the subdirectory /bin. If you want to build both you can run 'build_all'.
7. In ordern to solve a .qlp instance execute YASOL_CLP (YASOL_CPLEX) with the qlp file you want to solve as input parameters, for example: 
    * Yasol_CLP ../../../Data/p2756.qlp

**Executable** <br>
For Windows users we also provide an executable version which uses Coin Or.

**Older Versions** <br>
Yasol_O-1.3.3(2017). Windows Sources: Download Windows Executable: Download

---
### Getting started on Mac OS and Linux

Since Yasol has no own built-in LP solver you either need to install IBM® ILOG® CPLEX® Optimization Studio or the COIN-OR Optimization Suite in order to use our solver. For download- and license information of these extern tools, we refer to the corresponding webpages of <a href=https://community.ibm.com/community/user/legacy?lang=en target="_blank">CPLEX®</a> and <a href=https://www.coin-or.org/ target="_blank">Coin-OR</a>.

In order to use Yasol on Mac or Linux you need to perform the following steps:

1. Download the latest Yasol version (4.0.1.5 from 2023) and unpack it (Mac: Download, Linux: Download)
2. Read the README and edit the respective entries in "build_Yasol.bat" to specify your system settings and in particular the location of your COIN OR or CPLEX distribution by setting the variables YASOL_CLP_PATH or YASOL_CPLEX_PATH, respectively. This might look like:
    * export YASOL_CLP_PATH=/opt/tools/coinor_tool
    * export YASOL_CPLEX_PATH=/opt/ibm/ILOG/CPLEX_Studio1261/cplex
3. Make sure that this path contains the folders 'include' and 'lib'.
4. Execute build_Yasol.bat. This will build the executable "Yasol" in the subdirectory Yasol/Debug.
5. In order to execute Yasol using CLP from COIN OR as lp solver you might have to add the library location to your library search path variable:
    * Mac: export DYLD_LIBRARY_PATH=\$YASOL_CLP_PATH/lib:$DYLD_LIBRARY_PATH
    * Linux: export LD_LIBRARY_PATH=\$YASOL_CLP_PATH/lib:$LD_LIBRARY_PATH
6. In ordern to solve a .qlp instance execute Yasol with the qlp file you want to solve as input parameters, for example: 
    * ./Yasol FirstInstances/Runway.qlp

**Futher remarks:**

* Be sure that the file is in the .qlp format. For closer details on the file format examine the [QLP file format](About_Yasol.md#the-qlp-file-format).
* Always feel free to reach out to us. Setting up new software can be a tedious task and we are happy to help. You find our direct contact on our [developers page](Credits.md#developers)

**Older versions:**

* Yasol_3.9.9.3.1(2020) Mac: Download, Linux: Download
* Yasol_O-1.3.3(2017). Mac: Download, Linux: Download
---
### Known Bugs

* Displays result 'infeasible' even solution was found: Even though a solution is found during the search the final result is '-2.30584e+18', indicating an infeasible instance. However, the optimal solution value can be retrieved from the log. Happens more frequently on very small instances.
* When using CoinOR Tools as LP Solver, in case of a non simply restricted instance two additional IP (CBC) solvers are created. We have observed issues with these solvers that found IPs to be infeasible, even though they are not. This resulted in a thrown assertion or a wrong result. Happens more frequently on very small instances.
---

### License

Licence statement
The source code of Yasol that you find here on the download page is licensed under MIT license and the copyrights of the files are file dependent. Please note that library or object-files may be supplied under other license agreements. 

The MIT Licence states as follows:

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.