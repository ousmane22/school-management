
package com.groupeisi.subject.subject_service.web;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour addSubject complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="addSubject"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="subject" type="{http://web.subject_service.subject.groupeisi.com/}subjectRequest" minOccurs="0"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "addSubject", propOrder = {
    "subject"
})
public class AddSubject {

    protected SubjectRequest subject;

    /**
     * Obtient la valeur de la propriété subject.
     * 
     * @return
     *     possible object is
     *     {@link SubjectRequest }
     *     
     */
    public SubjectRequest getSubject() {
        return subject;
    }

    /**
     * Définit la valeur de la propriété subject.
     * 
     * @param value
     *     allowed object is
     *     {@link SubjectRequest }
     *     
     */
    public void setSubject(SubjectRequest value) {
        this.subject = value;
    }

}
