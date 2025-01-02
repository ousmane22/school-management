
package com.groupeisi.subject.subject_service.web;

import jakarta.xml.bind.annotation.XmlAccessType;
import jakarta.xml.bind.annotation.XmlAccessorType;
import jakarta.xml.bind.annotation.XmlElement;
import jakarta.xml.bind.annotation.XmlType;


/**
 * <p>Classe Java pour deleteSubjectResponse complex type.
 * 
 * <p>Le fragment de schéma suivant indique le contenu attendu figurant dans cette classe.
 * 
 * <pre>
 * &lt;complexType name="deleteSubjectResponse"&gt;
 *   &lt;complexContent&gt;
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType"&gt;
 *       &lt;sequence&gt;
 *         &lt;element name="return" type="{http://www.w3.org/2001/XMLSchema}boolean"/&gt;
 *       &lt;/sequence&gt;
 *     &lt;/restriction&gt;
 *   &lt;/complexContent&gt;
 * &lt;/complexType&gt;
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "deleteSubjectResponse", propOrder = {
    "_return"
})
public class DeleteSubjectResponse {

    @XmlElement(name = "return")
    protected boolean _return;

    /**
     * Obtient la valeur de la propriété return.
     * 
     */
    public boolean isReturn() {
        return _return;
    }

    /**
     * Définit la valeur de la propriété return.
     * 
     */
    public void setReturn(boolean value) {
        this._return = value;
    }

}
