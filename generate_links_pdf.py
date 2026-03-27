#!/usr/bin/env python3
"""
Script para gerar PDF com os links do repositório GitHub e projeto Vercel
"""

from fpdf import FPDF
from datetime import datetime
import sys

def generate_pdf(github_link, vercel_link, output_file="links.pdf"):
    """
    Gera um PDF contendo os links do GitHub e Vercel
    
    Args:
        github_link (str): URL do repositório GitHub
        vercel_link (str): URL do projeto publicado na Vercel
        output_file (str): Nome do arquivo PDF de saída
    """
    
    # Criar PDF
    pdf = FPDF()
    pdf.add_page()
    
    # Configurar fonte
    pdf.set_font("Helvetica", "B", 24)
    pdf.set_text_color(0, 102, 255)  # Azul vibrante
    
    # Título
    pdf.cell(0, 20, "Portfólio React", ln=True, align="C")
    
    # Linha separadora
    pdf.set_draw_color(0, 102, 255)
    pdf.line(20, pdf.get_y() + 5, 190, pdf.get_y() + 5)
    pdf.ln(15)
    
    # Seção GitHub
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(26, 26, 26)  # Preto
    pdf.cell(0, 10, "Repositório GitHub (Público)", ln=True)
    
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(100, 100, 100)  # Cinza
    pdf.multi_cell(0, 8, f"Link: {github_link}")
    pdf.ln(5)
    
    # Seção Vercel
    pdf.set_font("Helvetica", "B", 14)
    pdf.set_text_color(26, 26, 26)  # Preto
    pdf.cell(0, 10, "Projeto Publicado na Vercel", ln=True)
    
    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(100, 100, 100)  # Cinza
    pdf.multi_cell(0, 8, f"Link: {vercel_link}")
    pdf.ln(10)
    
    # Informações adicionais
    pdf.set_font("Helvetica", "I", 10)
    pdf.set_text_color(150, 150, 150)  # Cinza claro
    pdf.multi_cell(0, 5, f"Gerado em: {datetime.now().strftime('%d/%m/%Y às %H:%M:%S')}")
    
    # Salvar PDF
    pdf.output(output_file)
    print(f"✅ PDF gerado com sucesso: {output_file}")
    return output_file

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python3 generate_links_pdf.py <github_link> <vercel_link> [output_file]")
        print("\nExemplo:")
        print("python3 generate_links_pdf.py https://github.com/user/portfolio-react https://portfolio-react.vercel.app")
        sys.exit(1)
    
    github_link = sys.argv[1]
    vercel_link = sys.argv[2]
    output_file = sys.argv[3] if len(sys.argv) > 3 else "links.pdf"
    
    generate_pdf(github_link, vercel_link, output_file)
