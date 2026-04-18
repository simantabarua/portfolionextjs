#include <windows.h>
#include <fstream>
#include <vector>

int main() {
    const char* path = "C:\\Program Files (x86)\\Internet Download Manager\\IDMan.exe";
    std::vector<char> buffer;
    
    // Read file
    std::ifstream f(path, std::ios::binary);
    if (!f) return 1;
    buffer.assign((std::istreambuf_iterator<char>(f)), {});
    f.close();

    // Search for DDE348 push (68 48 E3 DD 00)
    for (size_t i = 0; i < buffer.size() - 5; ++i) {
        if (buffer[i] == 0x68 && 
            buffer[i+1] == 0x48 && buffer[i+2] == 0xE3 && 
            buffer[i+3] == 0xDD && buffer[i+4] == 0x00) {
            
            // Patch: jmp +75
            buffer[i] = 0xE9;
            buffer[i+1] = 0x4B; buffer[i+2] = 0x00;
            buffer[i+3] = 0x00; buffer[i+4] = 0x00;
            break;
        }
    }

    // Write back
    std::ofstream out(path, std::ios::binary);
    out.write(buffer.data(), buffer.size());
    MessageBoxA(0, "IDM Cracked! All popups removed.", "Success", 0);
}