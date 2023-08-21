# About Yasol

Yasol is a search based solver for so called 'Quantified integer linear programs with minimax objective‘ (QIP). As we additionally allow continuous decision variables in the final stage, the solver is able to deal with very specific Quantified mixed-integer linear programs (Q-MIP). The aim is to support optimization under uncertainty in a new way, based upon rigorous formal models of quantification and linear constraints.

Our mission is research. The reason why we open the sources of this solver is in order to intensify the discussion whether multi-stage optimization is possible and maybe even practical. 

While the solver is new in the sense that there are no other QIP solver at this time (October 2022), most basic ingredients of Yasol are not new at all. The heart of the search algorithm is an arithmetic linear constraint database together with the Alphabeta algorithm which has been successfully used in gaming programs like in chess programs since many years. In order to realize fast back jumps as typically performed in SAT- and QBF- solvers, we have extended the Alphabeta algorithm as roughly described in <sup>1</sup>. Yasol deals with constraint learning on the so called primal side as known from SAT- and QBF-solving, as well as with constraint learning on the so called dual side, as is known from Mathematical Programming. Yasol solves multistage quantified programs with the following properties:

* all constraints are linear
* quantifiers are either existential or universal
* the objective is minmax (more exactly: min max min … max min max) and is linear for any single game
* integer variables are allowed on all exist-stages and must be greater or equal to zero
* only integer variables are allowed on universal stages
* continuous variables are allowed only on the last stage, assuming it is an existential stage
* all variables must be bounded from below and above, and the range between upper and lower bounds of integer variables must not exceed 40 bits

In a recent computational study we showed that solving robust discrete problems with multiple stages is well within the reach of our solver <sup>2</sup>. It makes intensive use of a linear program solver like clp or the lp-solver of cplex.

For some historical notes on Quantified Programming, Linear Programming and personal credits, we refer to our [history page](Credits.md#history-q-mip-and-others). 

For details of how to use the solver and about details of input formats etc. we refer to our [download](Download.md) and [instances page](Instances.md).

<sup>1</sup> Thorsten Ederer, Michael Hartisch, Ulf Lorenz, Thomas Opfer, Jan Wolf. <a href=https://link.springer.com/content/pdf/10.1007/978-3-319-71649-7_19.pdf target="_blank">Yasol: An Open Source Solver for Quantified Mixed Integer Programs.</a> ACG 2017: 224-233 <br>
<sup>2</sup> Marc Goerigk, Michael Hartisch. <a href=https://www.sciencedirect.com/science/article/pii/S0305054821001908?via%3Dihub target="_blank">Multistage Robust Discrete Optimization via Quantified Integer Programming.</a> Computers & Operations Research, 135:105434, 2021 <br>
<sup>3</sup> Michael Hartisch, Ulf Lorenz. <a href=https://arxiv.org/abs/2210.11132 target="_blank">A general model-and-run solver for multistage robust discrete linear optimization.</a> Submitted to INFORMS Journal on Computing, 2023 

---

### Getting started

**Setting Up:** <br>
After you have downloaded and compiled the current Yasol version for your operating system you are ready to go. A few things have to be kept in mind when starting Yasol:

* Ensure that the Yasol.ini file is present in the directory you want to call the solver from. This file is needed to load the solver setting. If it is not found the solver starts with very basic setting resulting in very long runtime.
* Ensure that a Folder logs is present in the directory you want to call the solver from. When running Yasol a file containing additional output information is maintained in this folder and error messages occur if this folder cannot be found.

Note that these requirements are fulfilled when starting Yasol from "Your_Yasol_Directory/bin", where the executable is located after compiling.

**Calling the Solver:** <br>
In order to solve an instance first be sure it adheres to the [QLP file format](About_Yasol.md#the-qlp-file-format). The solver is invoked using the following call:

`./Yasol_CPLEX <Instance> [<InformationLevel>] [<TimeLimit>]`

The parameters in brackets are optional. With an increasing information level more output is generated mainly used for debugging purposes. If a time limit is specified the solution process is canceled after the given number seconds. Additionally, we overloaded the information level parameter:

* Information level "-60": The DEP of the binarized instance is built and solved via the linked MIP solver.
* Information level "-61": The DEP of the instance is built and solved via the linked MIP solver.
* Information level "Reduce": For instances with universal constraint system this call will return a standard QIP without universal constraints.
Note that these option are not excessively tested yet.

**Interpreting a Solution:** <br>
The main output the solver provides is the optimal objective value and the first stage solution. The principal variation, i.e. the variable assignment representing optimal play and thus the optimal objective value, can be retrieved from the logs/solutions.log file. Note that in this case "maintainPv" has to be set to one in the Yasol.ini file. Further, one can explicitly request a solution file solely for this instance. This can be done be setting "writeOutputFile=1" in the Yasol.ini file. Then, an XML formatted solution file will be created after the optimal solution was found. The name of the solution file will be the original instance file name with an attached .sol.

---

### The QLP File Format

As an input for our optimization software, a new standardized file format is required. We extended the CPLEX-LP file format to handle quantifiers and to specify an order of the variables in the so called QLP file format. The following keywords are used, where new keywords are marked with *.:
MAXIMIZE / MINIMIZE, SUBJECT TO, BOUNDS, GENERALS, BINARIES, UNCERTAINTY SUBJECT TO*, ALL*, EXISTS*, ORDER*, END

1. Every keyword has to be written in capital letters. Abbreviations are not allowed.
2. The BOUNDS section which follows the constraint section is mandatory. Each bound definition has to begin on a new line. The general form is l≤x≤u.
3. The BOUNDS section is followed by typifying the variables. To specify any of the variables as general integer variables, a GENERAL section has to be added; to specify any of the variables as binary integer variables, a BINARY section has to be added. In every section the variables are separated by at least one space.
4. Every variable is marked with one of the new keywords ALL or EXISTS. Analogously the variables in the ALL and EXISTS section are separated by at least one space.
5. The order of the variables is specified below the keyword ORDER.
6. If the instance contains a universal constraint system specifying the uncertainty set, the keyword UNCERTAINTY SUBJECT TO is used similar to SUBJECT TO for the existential constraint system.

**Exemplarily we will consider the following QIP instance:**
<!--
∃x<sub>1</sub>∈{0,1}  ∀x<sub>2</sub>∈{0,1}  ∃x<sub>3</sub>∈{0,1,2}: <br>
min	-		x<sub>1</sub>	-	2	x<sub>2</sub>	-	2	x<sub>3</sub> <br>
s.t.	-	x<sub>2</sub>	-	x<sub>3</sub>	≤	-1 <br>
 	    -	x<sub>1</sub>	+	x<sub>2</sub>	+	x<sub>3</sub>	≤	1 <br>
            x<sub>1</sub>	+	2	x<sub>2</sub>	≤	3
-->


$$ \exists x_1 \in \left\{0,1\right\} \quad \forall x_2 \in \left\{0,1\right\} \quad \exists x_3 \in \left\{0,1,2\right\}: $$

\begin{align}
\min \quad -&x_1 - 2x_2 -2x_3 \\[5pt]
\mathrm{s.t.} \quad &x_1 - x_2 - x_3 \leq -1 \\[5pt]
-&x_1 + x_2 + x_3 \leq 1 \\[5pt]
&x_1 + 2x_2 \leq 3
\end{align}

<br>
**A typical QLP file (belonging to the above example) looks as follows <a href=http://tm-server-2.wiwi.uni-siegen.de/t3-q-mip/fileadmin/downloads/instances/qip_example.qlp target="_blank">(example)</a>:**

MINIMIZE <br>
- x1 - 2 x2 - 2 x3 <br>
SUBJECT TO <br>
- x2 - x3 <= -1 <br>
- x1 + x2 + x3 <= 1 <br>
2 x1 + 2 x2 <= 3 <br>
BOUNDS <br>
0 <= x1 <= 1 <br>
0 <= x2 <= 1 <br>
0 <= x3 <= 2 <br>
BINARIES <br>
x1 x2 <br>
GENERALS <br>
x3 <br>
EXISTS <br>
x1 x3 <br>
ALL <br>
x2 <br>
ORDER <br>
x1 x2 x3 <br>
END

**Requirements and Restrictions:**

Only linear constraints and objective function.
integer variables are allowed in all variable blocks
Continuous variables, i.e. variables not listed below the keywords BINARIES or GENERAL, have to be part of the final (existential) variable block.
The right-hand side of each constraint may only contain a single parameter, i.e. all variables have to be on the left-hand side.


**Further Rules:**

* Make sure that all variables are on the left-hand side of the constraint. Variables on the right-hand side are not permitted.
* Similarly, parameters are ignored if they appear on the left-hand side of the constraint.
* The letter E or e, alone or followed by other valid symbols, in particular digits, should be avoided as this notation is reserved for exponential entries.
* All Variables need to be bounded. You can use '-inf' and '+inf' to indicated vast bounds but note that they are still bounded by some large number. Hence, be careful when interpreting the solution.
* Constraints do not need to have a name. If you decide on naming them note that constraints having a constraint names starting with "U_" are considered universal constraints, even if they appear underneath the SUBJECT TO keyword. This option is conserved in order to be able to deal with older instances that used a different file format.