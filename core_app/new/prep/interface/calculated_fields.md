---
title: Prep - Calculated fields
description: This section helps you to define your calculated calculated_fields
layout: page
scope: Datama/saas/prep
keywords: full app prep calculated fields
---


> **This section helps you to define your calculated calculated_fields*

In calculated fields, common mathematical operators are used, such as '+', '-', '*' and '/'.

The following **functions** are also available:

<b> Numeric functions:</b>

<table>
  <tr>
    <th style="width: 20%;">Function</th>
    <th style="width: 40%;">Description</th>
    <th style="width: 40%;">Example</th>
  </tr>
  <tr>
    <td><b>SUM</b>([col1],[col]*)</td>
    <td>Calculates the sum of two or more columns line by line.</td>
    <td><i>SUM([revenue],[bonus]) => revenue(10 ,20);bonus(30,40) -> 40, 60</i></td>
  </tr>
  <tr>
    <td><b>SUM_COLUMN</b>([col])</td>
    <td>Calculates the total sum of given column.</td>
    <td><i>SUM_COLUMN([revenue]) => revenue(10 ,20, 30) -> 60, 60, 60</i></td>
  </tr>
  <tr>
    <td><b>MEAN</b>([col1],[col]*)</td>
    <td>Calculates the average of two or more columns.</td>
    <td><i>MEAN([revenue],[bonus]) => revenue(10 ,20);bonus(30,40) -> 25 ,25</i></td>
  </tr>
</table>



<b> Logic functions:</b>

<table>
  <tr>
    <th style="width: 20%;">Function</th>
    <th style="width: 40%;">Description</th>
    <th style="width: 40%;">Example</th>
  </tr>
  <tr>
    <td><b>IF</b>(Condition,[THEN]Statement1 [,[OTHERWISE]Statement2])</td>
    <td>Is used to check a condition and return a value depending on whether the condition is true or false.</td>
    <td><i>IF([income] < 0 ,'in-debt', 'not-indebt')</i></td>
  </tr>
  <tr>
    <td><b>AND</b>(Condition1,Condition2)</td>
    <td>Makes AND logical function.</td>
    <td><i>AND([name] = 'john', [income] > [average])=> name('john');income(10);average(20) => False</i></td>
  </tr>
  <tr>
    <td><b>OR</b>(Condition1, Condition2)</td>
    <td>Makes OR logical function.</td>
    <td><i>OR([name] = 'kenny', [revenue] > [average])=> name('john');revenu(25);average(11) => True</i></td>
  </tr>
  <tr>
    <td><b>NOT</b>([col1])</td>
    <td>Makes NOT logical function.</td>
    <td><i>NOT([boolean]) => boolean(True) -> False</i></td>
  </tr>
  <tr>
    <td><b>IS_NULL</b>([col])</td>
    <td>Returns a Boolean value indicating whether an expression contains no valid data.</td>
    <td><i>IS_NULL('Valeur') -> False</i></td>
  </tr>
</table>



<b> Text functions:</b>

<table>
  <tr>
    <th style="width: 20%;">Function</th>
    <th style="width: 40%;">Description</th>
    <th style="width: 40%;">Example</th>
  </tr>
  <tr>
    <td><b>CONCAT</b>([col1], [col2])</td>
    <td>Concatenates two string data. Concat can be used as '&' operator ([arg1] & [arg2]).</td>
    <td><i>CONCAT([firstName], [lastName]) => Johny , Bravo => Johny Bravo</i></td>
  </tr>
  <tr>
    <td><b>CASE</b>(Condition_1, val_1, ...., Condition_n, val_n, else_val)</td>
    <td>When a condition is true, fill a new column with the value associated with that condition. else_val default value is None, and the priority is fixed by the order.</td>
    <td><i>CASE([Value] > 150, "Very good value", [Value] > 100, "Good value", [Value] < 50, "Bad value", "Normal") => 230, 42, 89, 142, 123 => "Very good value", "Bad value", "Normal", "Good value", "Good value"</i></td>
  </tr>
  <tr>
    <td><b>REGEX_REPLACE</b>([col], MatchRegex, 'Replacement')</td>
    <td>Replaces column string data that matches 'MatchRegex' with a constant string.</td>
    <td><i>REGEX_REPLACE([badspacing],'\\s*',' ') => badspacing(extra      space) -> extra space</i></td>
  </tr>
  <tr>
    <td><b>REGEX_EXTRACT</b>([col], '(pattern)')</td>
    <td>Extracts a regex pattern from column string data. Set to null if match is null.</td>
    <td><i>REGEX_EXTRACT([names], '(star)') => names(Loic Joestar , Dio Mistar) -> star , star</i></td>
  </tr>
  <tr>
    <td><b>REGEX_CONTAINS</b>([col], '(pattern)')</td>
    <td>Tells if a certain pattern is in a string data.</td>
    <td><i>REGEX_CONTAINS([names], 'star') => names(Loic Joestar , Dio Mistar, Jhon Doe) -> true , true, false</i></td>
  </tr>
</table>




<b> Date functions:</b>

<table>
  <tr>
    <th style="width: 20%;">Function</th>
    <th style="width: 40%;">Description</th>
    <th style="width: 40%;">Example</th>
  </tr>
  <tr>
    <td><b>DATE_FORMAT</b>([col], 'format')</td>
    <td>Applies new format to date columns.</td>
    <td><i>DATE_FORMAT([Date], '%Y-%m-%d')</i></td>
  </tr>
  <tr>
    <td><b>YEAR</b>([col])</td>
    <td>Extract YEAR from date column.</td>
    <td><i>YEAR('2024-10-22') -> 2024</i></td>
  </tr>
  <tr>
    <td><b>MONTH</b>([col])</td>
    <td>Extracts MONTH from date column.</td>
    <td><i>MONTH('2024-10-22') -> 10</i></td>
  </tr>
  <tr>
    <td><b>DAY</b>([col])</td>
    <td>Extracts DAY from date column.</td>
    <td><i>DAY('2024-10-22') -> 22</i></td>
  </tr>
  <tr>
    <td><b>DAY_OF_WEEK</b>([col])</td>
    <td>Extracts the day number from the date in the week in the range [1,7]).</td>
    <td><i>DAY_OF_WEEK('2024-10-22') -> 3</i></td>
  </tr>
  <tr>
    <td><b>WEEK</b>([col])</td>
    <td>Extracts week number of the year (Sunday as the first day of the week.</td>
    <td><i>WEEK('2024-10-22') -> 42</i></td>
  </tr>
  <tr>
    <td><b>ISO_WEEK</b>([col])</td>
    <td>Extracts ISO 8601 week.</td>
    <td><i>ISO_WEEK('2024-10-22') -> 43</i></td>
  </tr>
</table>
