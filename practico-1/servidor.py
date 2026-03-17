import http.server
import socketserver

# La consigna pide que sea en el puerto 5000
PUERTO = 5000

# Esta línea le dice a Python que sirva los archivos de la carpeta donde estás parado
Manejador = http.server.SimpleHTTPRequestHandler

# Acá levantamos el servidor y lo mantenemos escuchando
with socketserver.TCPServer(("", PUERTO), Manejador) as httpd:
    print(f"Servidor Python activo.")
    print(f"Entrá a tu navegador y poné: http://localhost:{PUERTO}")
    
    # Esto hace que el servidor se quede corriendo hasta que lo cierres a la fuerza
    httpd.serve_forever()