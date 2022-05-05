#version 330 core
out vec4 FragColor;
in vec2 TexCoords;
uniform sampler2D texture1;

void main()
{
 
    vec4 texColor=vec4(1.0f*texture(texture1, TexCoords).r,1.0f*texture(texture1, TexCoords).g,1.0f*texture(texture1, TexCoords).b,texture(texture1, TexCoords).rgba);
    if(texColor.a < 0.1)
        discard;
    FragColor = texColor;

}