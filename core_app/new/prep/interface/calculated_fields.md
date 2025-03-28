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
| Function  | Description | Exemple |
| ----- |:-------------|:-------------|
| **SUM**([col1],[col]*) | Calculates the sum of two or more columns line by line.|*SUM([revenue],[bonus]) => revenue(10 ,20);bonus(30,40) -> 40, 60*|
|**SUM_COLUMN**([col]) |Calculates the total sum of given column. |*SUM_COLUMN([revenue]) => revenue(10 ,20, 30) -> 60, 60, 60* |
|**MEAN**([col1],[col]*) |Calculates the average of two or more columns. |*MEAN([revenue],[bonus]) => revenue(10 ,20);bonus(30,40) -> 25 ,25* |



<b> Logic functions:</b>

| Function  | Description | Exemple |
| ----- |:-------------|:-------------|
|**IF**(Condition,[THEN]Statement1 [,[OTHERWISE]Statement2])|Is used to check a condition and return a value depending on whether the condition is true or false. |*IF([income] < 0 ,'in-debt', 'not-indebt')* |
|**AND**(Condition1,Condition2) |Makes AND logical function. |*AND([name] = 'john', [income] > [average])=> name('john');income(10);average(20) => False* |
|**OR**(Condition1, Condition2) |Makes OR logical function.|*OR([name] = 'kenny', [revenue] > [average])=> name('john');revenu(25);average(11) => True*|
|**NOT**([col1]) |Makes NOT logical function. |*NOT([boolean]) => boolean(True) -> False* |
|**IS_NULL**([col])|Returns a Boolean value indicating whether an expression contains no valid data.|*IS_NULL('Valeur') -> False* |



<b> Text functions:</b>

| Function  | Description | Exemple |
| ----- |:-------------|:-------------|
|**CONCAT**([col1], [col2]) |Concatenates two string data. Concat can be used as '&' operator ([arg1] & [arg2]).|*CONCAT([firstName], [lastName]) => Johny , Bravo => Johny Bravo* |
|**REGEX_REPLACE**([col], MatchRegex, 'Replacement') |Replaces column string data that matches 'MatchRegex' with a constant string.|*REGEX_REPLACE([badspacing],'\\s\*',' ') => badspacing(extra      space) -> extra space* |
|**REGEX_EXTRACT**([col], '(pattern)') |Extracts a regex pattern from column string data. Set to null if match is null. |*REGEX_EXTRACT([names], '(star)') => names(Loic Joestar , Dio Mistar) -> star , star* |



<b> Date functions:</b>

| Function  | Description | Exemple |
| ----- |:-------------|:-------------|
|**DATE_FORMAT**([col], 'format') |Applies new format to date columns.|*DATE_FORMAT([Date], '%Y-%m-%d')* |
|**YEAR**([col]) |Extract YEAR from date column. |*YEAR('2024-10-22') -> 2024* |
|**MONTH**([col]) |Extracts MONTH from date column. |*MONTH('2024-10-22') -> 10* |
|**DAY**([col]) |Extracts DAY from date column. |*DAY('2024-10-22') -> 22* |
|**DAY_OF_WEEK**([col]) |Extracts the day number from the date in the week in the range [1,7]). |*DAY_OF_WEEK('2024-10-22') -> 3* |
|**WEEK**([col]) |Extracts week number of the year (Sunday as the first day of the week. |*WEEK('2024-10-22') -> 42*|
|**ISO_WEEK**([col]) |Extracts ISO 8601 week.|*ISO_WEEK('2024-10-22') -> 43* |
