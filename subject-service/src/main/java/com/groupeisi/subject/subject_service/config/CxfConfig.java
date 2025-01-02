package com.groupeisi.subject.subject_service.config;

import com.groupeisi.subject.subject_service.web.SubjectSoapService;
import lombok.AllArgsConstructor;
import org.apache.cxf.Bus;
import org.apache.cxf.jaxws.EndpointImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@AllArgsConstructor
public class CxfConfig {
    private Bus bus;
    private SubjectSoapService subjectSoapService;

    @Bean
    public EndpointImpl endpoint(){
        EndpointImpl endpoint = new EndpointImpl(bus, subjectSoapService);
        endpoint.publish("SubjectService");

        return endpoint;
    }
}
