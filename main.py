print('Ingrese la cantidad de alumnos de los que desea evaluar sus notas')
cantidad_alumnos = int(input())

i = 0
terminado = 'no'
lista_de_alumnos = []
total_notas = 0

if cantidad_alumnos > 0 :
    while i != cantidad_alumnos and  terminado != 'si':
        print('Ingrese el nombre del alumno')
        nombre = str(input())

        print('Ingrese la edad del alumno')
        edad = int(input())

        print('Ingrese la nota del alumno')
        nota = float(input())

        lista_de_alumnos.append([nombre,edad,nota])

        i += 1

        if i == cantidad_alumnos :
            terminado = str(input('Ha terminado? Si - No')).lower()
            if terminado =='no':
                cantidad_alumnos += 1
else:
    print('Gracias por usar el sistema. Nos vemos en otro momento')

# Nombre de los alumnos
print('Los alumnos ingresados fueron')
for a in lista_de_alumnos :
    print(f'{lista_de_alumnos.index(a)}_ {a[0]}')

# Notas de mayor a menor
lista_de_alumnos.sort(key=lambda alumno:alumno[2], reverse=True)

print('Las notas ordenadas de mayor a menor son:')

for alumno in lista_de_alumnos :
    print(f'Alumno: {alumno[0]} - Nota: {alumno[2]}')

# Promedio
for n in lista_de_alumnos :
    total_notas += n[2]

promedio = total_notas/len(lista_de_alumnos)

print(f'\nEl promedio general de los alumnos es: {promedio}')


