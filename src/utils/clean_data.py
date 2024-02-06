import csv
from pathlib import Path

input_file = f'{Path(__file__).parent.parent}\data\Meteorite_Landings_20240205.csv'
output_file = f'{Path(__file__).parent.parent}\data\Meteorite_Landings_20240205 - cleaned.csv'

with open(input_file, 'r', encoding='utf-8') as infile, open(output_file, 'w', newline='', encoding='utf-8') as outfile:
    reader = csv.reader(infile)
    writer = csv.writer(outfile)
    
    header = next(reader)
    writer.writerow(header)

    for row in reader:
        if all(row[header.index(col)] and float(row[header.index(col)]) != 0 
            for col in ['mass', 'reclat', 'reclong']):
                writer.writerow(row)

print('Meteorites processed successfully!')
