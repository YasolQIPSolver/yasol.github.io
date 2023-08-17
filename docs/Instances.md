# Instances

<!-- ![HomePic](images/HomePic.png) -->

### Test instances

The here provided are instances are formatted in the  qlp file format. Note that in some instances universally quantified constraints are still indicated by a constraint name starting with "U_", rather than using the keyword UNCERTAINTY SUBJECT TO. When creating new instance always use the keyword.

---

### Artificial QIP instances

Quantified Integeger Programs (QIP) are Q-MIPs with only integer variables. A special case of QIPs are Quantified Boolean Programs (QBP) with only boolean variables. The constraints are linear and an objective typically exists.

<a href="../downloads/instances/test_instance/QIP.tar.gz" download>QIP test instances</a>

---

### Multistage Robust Selection Problem

The task is to select p out of n=2p items, such that the costs are minimized<sup>1, 2</sup>. This happens in a multistage manner: In a first (existential) decision stage items can be selected for fixed costs. Then, in a universal decision stage, one of N cost scenario is selected and in the subsequent existential decision stage further items can be selected. Those two stages (disclosure of a scenario and selection of items) are repeated S times. We provide two different quantified models: a standard QIP and a QIP with universal constraints, i.e. a QIP with polyhedral uncertainty set. Selection instances have the naming scheme selection-n-p-N-S-R-t.qlp. R is the seed for the random number generator. t∈{s,u} represents the model type: s for "standard QIP" and u for "QIP with universal constraints". We provide the following testsets:

* N=4, n∈{10,20,30,40,50} and S∈{1,..,8}. 50 instances per constellation:
    * <a href="../downloads/instances/mrsp/Selection_QIP_4Scenarios.zip" download>Download: 2000 QIP instances</a>
    * <a href="../downloads/instances/mrsp/Selection_QIPPU_4Scenarios.zip" download>Download: 2000 QIP instances with universal constrains</a>
* n=10, N=2^k, k∈{1,..,8} and S=s∈{1,..,8} with k+s≤11. 50 instances per constellation:
    * <a href="../downloads/instances/mrsp/Selection_QIP_10items.zip" download>Download: 2450 QIP instances</a>
    * <a href="../downloads/instances/mrsp/Selection_QIPPU_10items.zip" download>Download: 2450 QIP instances with universal constrains</a>

---

### Multistage Robust Assignment Problem

For a weighted bipartite graph G=(V,E,c) with V=A∪B, n=|A|=|B| one wants to determine a perfect matching of minimum costs<sup>1, 2</sup>. Similar to the selection problem, this happens in a multistage manner: In a first (existential) decision stage edges can be selected for fixed costs. Then, in a universal decision stage, one of N cost scenario is selected and in the subsequent existential decision stage further edges can be selected. Those two stages (disclosure of a scenario and selection of edges) are repeated S times. Again, we provide two different quantified models: a standard QIP and a QIP with universal constraints. Assignment instances have the naming scheme selection-n-N-S-R-t.qlp. R is the seed for the random number generator. t∈{s,u} represents the model type: s for "standard QIP" and u for "QIP with universal constraints". We provide the following testset:

* n∈{4,5,6,7,8,9,10}, N∈{2,4,8} and S∈{1,2,3,4}. 50 instances per constellation:
    * <a href="../downloads/instances/mrap/Assignment_QIP.zip" download>Download: 4200 QIP instances</a>
    * <a href="../downloads/instances/mrap/Assignment_QIPPU.zip" download>Download: 4200 QIP instances with universal constrains</a>

---

### Multistage Robust Lot-Sizing Problem

We consider a single item lot-sizing problem with discrete ordering decisions and T periods<sup>2</sup>. At the beginning of each time period, the product demand that needs to be satisfied is disclosed: Either dt or dt. In order to serve the demand, in each period t∈{0,...,T-1} one of B basic orders can be places resulting in the deliverance of corresponding quantity at the beginning of the subsequent period. Additionally, on of U urgent orders can be placed in each period t∈{1,...,T} (with higher costs than the basic order), that is delivered in the same period. If the available quantity exceeds the demand, excess units are stored. Lot-Sizing instances have the naming scheme LotSizing-T-B-U-T.qlp. R is the seed for the random number generator. We provide the following testset:

* T∈{5,6,7,8,9,10}, B∈{3,4} and U∈{2,3}. 50 instances per constellation:
    * <a href="/../downloads/instances/mrlsp/LotSizingInstances.zip" download>Download: 1200 QIP instances</a>

---

### Multistage Robust Knapsack Problem

The task is to find a valid knapsack solution for each of T stages with n available items, where uncertainty in the item weights has been added [2]. The number of items with increased weight is budgeted: in each time step the weight of at most α items can be increased and overall at most β such increases are allowed. The objective ist to maximize the profit resulting from the selected knapsack items but additionally a transition bonus is used to aim for a stable sequence of solutions. Knapsack instances have the naming scheme Knapsack_T-n-R.qlp. R is the seed for the random number generator. We provide the following testset:

* n∈{2,...,7} and T∈{2,...,7}. 50 instances per constellation:
    * <a href="/../downloads/instances/mrkp/KnapsackInstances.zip" download>Download: 1800 QIP instances</a>

---

### Runway Scheduling Instances

For a set of airplanes A, a set of timeslots S, and b runways we are interested in a b-matching such that each airplane is assigned to exactly one time slot and each time slot contains at most b airplanes<sup>1</sup>. After an initial plan is determined, the time windows (a set of time slots) for a (sub)set of airplanes are disclosed. These airplanes must be assigned to their final time slot (within the given time window). This happens in a multistage manner with s being the number of disclosures, i.e. the number of universal variable blocks, e.g. s=2 stands for the quantification sequence ∃ ∀ ∃ ∀ ∃. The universal player is restricted in the way she is allowed to select the time windows: the overall time window lengths must exceed a given value. This can be modeled either explicitly by using universal constraints or implicitly by adding variables and constraint that detect and penalize such a violation. For a more thorough introduction we refer to this Ph.D. thesis or this site. Runway scheduling instances have the naming scheme RWS-|A|-b-|S|-s-R-t.qlp. Again, R is the seed for the random number generator. t∈{s,u} represents the model type: s for "standard QIP" and u for "QIP with universal constraints". We provide the following testsets:

* |A|∈{2,...,8}, |S|∈{3,...,10}, b∈{2,3,4} with s=1. 20 instances per constellation:
    * <a href="/../downloads/instances/rsi/RWS_SingleStage_s.zip" download>Download: 3360 QIP instances</a>
    * <a href="/../downloads/instances/rsi/RWS_SingleStage_u.zip" download>Download: 3360 QIP instances with universal constrains</a>
* |A|=7, |S|=12, b=3 and s∈{1,..,4}. 300 instances per constellation:
    * <a href="/../downloads/instances/rsi/RWS_A7_b3_S12_s.zip" download>Download: 1200 QIP instances</a>
    * <a href="/../downloads/instances/rsi/RWS_A7_b3_S12_u.zip" download>Download: 1200 QIP instances with universal constrains</a>

---

### Other instances

The Quantified Satisfiability problem (QSAT), which is also know as the satisfiability of Quantified Boolean Formulas (QBF), is related to the Q-MIP-problem. In QSAT there is no objective function and all variables are binary. Further, it deals with clauses instead of arithmetic linear inequalities. However, with some effort and good will, it is possible to extract very special QMIPs from QSAT instances. Similar is the situation with MIPs, which deal with linear constraints but without quantification.

Here, we present some further examples from these two sub-disciplines, collected from qbflib.org and miplib and converted to QLP-format. 


Instance collection IP based

Instance collection MIP based

Instance collection QBF based

Please note that not all instances have been converted 1:1 due to some border cases in the conversion.

---

<sup>1</sup> Further details can be found in this <a href=https://dspace.ub.uni-siegen.de/handle/ubsi/1705 target="_blank">Ph.D. thesis</a> <br>
<sup>2</sup> Further details can be found in this <a href=https://www.sciencedirect.com/science/article/pii/S0305054821001908?via%3Dihub target="_blank">paper</a>
